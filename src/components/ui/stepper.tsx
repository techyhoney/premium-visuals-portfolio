"use client";

import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";
import * as React from "react";
import { createContext, useContext } from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

// Types
type StepperContextValue = {
  activeStep: number;
  setActiveStep: (step: number) => void;
  orientation: "horizontal" | "vertical";
};

type StepItemContextValue = {
  step: number;
  state: StepState;
  isDisabled: boolean;
  isLoading: boolean;
};

type StepState = "active" | "completed" | "inactive" | "loading";

// Contexts
const StepperContext = createContext<StepperContextValue | undefined>(undefined);
const StepItemContext = createContext<StepItemContextValue | undefined>(undefined);

const useStepper = () => {
  const context = useContext(StepperContext);
  if (!context) {
    throw new Error("useStepper must be used within a Stepper");
  }
  return context;
};

const useStepItem = () => {
  const context = useContext(StepItemContext);
  if (!context) {
    throw new Error("useStepItem must be used within a StepperItem");
  }
  return context;
};

// Components
interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: number;
  value?: number;
  onValueChange?: (value: number) => void;
  orientation?: "horizontal" | "vertical";
}

const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  (
    { defaultValue = 0, value, onValueChange, orientation = "horizontal", className, ...props },
    ref,
  ) => {
    const [activeStep, setInternalStep] = React.useState(defaultValue);

    const setActiveStep = React.useCallback(
      (step: number) => {
        if (value === undefined) {
          setInternalStep(step);
        }
        onValueChange?.(step);
      },
      [value, onValueChange],
    );

    const currentStep = value ?? activeStep;

    return (
      <StepperContext.Provider
        value={{
          activeStep: currentStep,
          setActiveStep,
          orientation,
        }}
      >
        <div
          ref={ref}
          className={cn(
            "group/stepper inline-flex data-[orientation=horizontal]:w-full data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col",
            className,
          )}
          data-orientation={orientation}
          {...props}
        />
      </StepperContext.Provider>
    );
  },
);
Stepper.displayName = "Stepper";

// StepperItem
interface StepperItemProps extends React.HTMLAttributes<HTMLDivElement> {
  step: number;
  completed?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

const StepperItem = React.forwardRef<HTMLDivElement, StepperItemProps>(
  (
    { step, completed = false, disabled = false, loading = false, className, children, ...props },
    ref,
  ) => {
    const { activeStep } = useStepper();

    const state: StepState =
      completed || step < activeStep ? "completed" : activeStep === step ? "active" : "inactive";

    const isLoading = loading && step === activeStep;

    return (
      <StepItemContext.Provider value={{ step, state, isDisabled: disabled, isLoading }}>
        <div
          ref={ref}
          className={cn(
            "group/step flex items-center group-data-[orientation=horizontal]/stepper:flex-row group-data-[orientation=vertical]/stepper:flex-col",
            className,
          )}
          data-state={state}
          {...(isLoading ? { "data-loading": true } : {})}
          {...props}
        >
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: step * 0.1 }}
          >
            {children}
          </motion.div>
        </div>
      </StepItemContext.Provider>
    );
  },
);
StepperItem.displayName = "StepperItem";

// StepperTrigger
interface StepperTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const StepperTrigger = React.forwardRef<HTMLButtonElement, StepperTriggerProps>(
  ({ asChild = false, className, children, ...props }, ref) => {
    const { setActiveStep } = useStepper();
    const { step, isDisabled, state } = useStepItem();

    if (asChild) {
      return <div className={className}>{children}</div>;
    }

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center gap-3 disabled:pointer-events-none disabled:opacity-50 transition-all hover:scale-105",
          className,
        )}
        onClick={() => setActiveStep(step)}
        disabled={isDisabled}
        {...props}
      >
        {children}
      </button>
    );
  },
);
StepperTrigger.displayName = "StepperTrigger";

// StepperIndicator
interface StepperIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

const StepperIndicator = React.forwardRef<HTMLDivElement, StepperIndicatorProps>(
  ({ asChild = false, className, children, ...props }, ref) => {
    const { state, step, isLoading } = useStepItem();

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex size-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-deep-purple/50 text-base font-medium text-white backdrop-blur-sm data-[state=active]:bg-vivid-purple data-[state=completed]:bg-vivid-purple data-[state=active]:text-white data-[state=completed]:text-white",
          "shadow-[0_0_15px_rgba(139,92,246,0.3)] data-[state=active]:shadow-[0_0_20px_rgba(139,92,246,0.5)]",
          "transition-all duration-300",
          className,
        )}
        data-state={state}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            <span className="transition-all group-data-[loading=true]/step:scale-0 group-data-[state=completed]/step:scale-0 group-data-[loading=true]/step:opacity-0 group-data-[state=completed]/step:opacity-0 group-data-[loading=true]/step:transition-none">
              {step}
            </span>
            <CheckIcon
              className="absolute scale-0 opacity-0 transition-all group-data-[state=completed]/step:scale-100 group-data-[state=completed]/step:opacity-100"
              width={20}
              height={20}
              strokeWidth={2}
              aria-hidden="true"
            />
            {isLoading && (
              <span className="absolute transition-all">
                <LoaderCircle
                  className="animate-spin"
                  size={20}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </span>
            )}
          </>
        )}
      </div>
    );
  },
);
StepperIndicator.displayName = "StepperIndicator";

// StepperTitle
const StepperTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 
      ref={ref} 
      className={cn(
        "text-lg font-semibold text-white group-data-[state=active]/step:text-white group-data-[state=inactive]/step:text-white/70", 
        className
      )} 
      {...props} 
    />
  ),
);
StepperTitle.displayName = "StepperTitle";

// StepperDescription
const StepperDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p 
    ref={ref} 
    className={cn(
      "text-sm text-muted-foreground group-data-[state=active]/step:text-white/80", 
      className
    )} 
    {...props} 
  />
));
StepperDescription.displayName = "StepperDescription";

// StepperSeparator
const StepperSeparator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { state } = useStepItem();
    
    return (
      <div
        ref={ref}
        className={cn(
          "m-0.5 bg-white/10 group-data-[orientation=horizontal]/stepper:h-0.5 group-data-[orientation=vertical]/stepper:h-12 group-data-[orientation=horizontal]/stepper:w-full group-data-[orientation=vertical]/stepper:w-0.5 group-data-[orientation=horizontal]/stepper:flex-1 group-data-[state=completed]/step:bg-vivid-purple/70",
          "transition-all duration-500 ease-in-out",
          className,
        )}
        data-state={state}
        {...props}
      >
        {state === "completed" && (
          <div className="h-full w-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-vivid-purple to-accent animate-pulse-slow"></div>
          </div>
        )}
      </div>
    );
  },
);
StepperSeparator.displayName = "StepperSeparator";

export {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
}; 