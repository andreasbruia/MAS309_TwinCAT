(*
 *
 * File: OPC_UA_block_converter.st
 *
 * IEC 61131-3 Structured Text (ST) code generated for subsystem "OPC_UA_block_converter/FB_PID_new"
 *
 * Model name                      : OPC_UA_block_converter
 * Model version                   : 1.17
 * Model creator                   : student
 * Model last modified by          : student
 * Model last modified on          : Tue Apr 01 09:01:43 2025
 * Model sample time               : 0.01s
 * Subsystem name                  : OPC_UA_block_converter/FB_PID_new
 * Subsystem sample time           : 0.01s
 * Simulink PLC Coder version      : 24.2 (R2024b) 21-Jun-2024
 * ST code generated on            : Tue Apr 01 09:02:07 2025
 *
 * Target IDE selection            : PLCopen XML
 * Test Bench included             : No
 *
 *)
FUNCTION_BLOCK FB_PID_new
VAR_INPUT
    ssMethodType: SINT;
    fSignalReference: LREAL;
    fSignalFeedback: LREAL;
    fProportionalGain: LREAL;
    fIntegralGain: LREAL;
    bIntegralControlReset: BOOL;
    bActivateIntegralControl: BOOL;
    bEnable: BOOL;
    bActivateDerivativeControl: BOOL;
    fDerivativeGain: LREAL;
END_VAR
VAR_OUTPUT
    fClosedLoopSignal: LREAL;
    fSignalError: LREAL;
    P_out: LREAL;
    I_out: LREAL;
    D_out: LREAL;
END_VAR
VAR
    c_DiscreteTimeIntegrator1_D: LREAL;
    UD_DSTATE: LREAL;
END_VAR
VAR_TEMP
    rtb_TSamp: LREAL;
    rtb_Sum5: LREAL;
    rtb_Saturation: LREAL;
END_VAR
CASE ssMethodType OF
    0: 
        (* SystemInitialize for Atomic SubSystem: '<Root>/FB_PID_new' *)
        (* InitializeConditions for DiscreteIntegrator: '<S1>/Discrete-Time Integrator1' *)
        c_DiscreteTimeIntegrator1_D := 0.0;
        (* InitializeConditions for UnitDelay: '<S2>/UD'
         *
         * Block description for '<S2>/UD':
         *  
         *  Store in Global RAM *)
        UD_DSTATE := 0.0;
        (* End of SystemInitialize for SubSystem: '<Root>/FB_PID_new' *)
    1: 
        (* Outputs for Atomic SubSystem: '<Root>/FB_PID_new' *)
        (* Sum: '<S1>/Sum' *)
        fSignalError := fSignalReference - fSignalFeedback;
        (* Product: '<S1>/Product' *)
        P_out := fProportionalGain * fSignalError;
        (* DiscreteIntegrator: '<S1>/Discrete-Time Integrator1' *)
        IF bIntegralControlReset THEN 
            c_DiscreteTimeIntegrator1_D := 0.0;
        END_IF;
        (* Switch: '<S1>/Switch2' incorporates:
         *  Constant: '<S1>/Constant'
         *  DiscreteIntegrator: '<S1>/Discrete-Time Integrator1' *)
        IF bActivateIntegralControl THEN 
            I_out := c_DiscreteTimeIntegrator1_D;
        ELSE 
            I_out := 0.0;
        END_IF;
        (* End of Switch: '<S1>/Switch2' *)
        
        (* SampleTimeMath: '<S2>/TSamp'
         *
         * About '<S2>/TSamp':
         *  y = u * K where K = 1 / ( w * Ts )
         *   *)
        rtb_TSamp := fDerivativeGain * 100.0;
        (* Switch: '<S1>/Switch3' incorporates:
         *  Constant: '<S1>/Constant2'
         *  Sum: '<S2>/Diff'
         *  UnitDelay: '<S2>/UD'
         *
         * Block description for '<S2>/Diff':
         *  
         *  Add in CPU
         *
         * Block description for '<S2>/UD':
         *  
         *  Store in Global RAM *)
        IF bActivateDerivativeControl THEN 
            D_out := rtb_TSamp - UD_DSTATE;
        ELSE 
            D_out := 0.0;
        END_IF;
        (* End of Switch: '<S1>/Switch3' *)
        
        (* Sum: '<S1>/Sum5' *)
        rtb_Sum5 := (P_out + I_out) + D_out;
        (* Saturate: '<S1>/Saturation' *)
        IF rtb_Sum5 > 0.5 THEN 
            rtb_Saturation := 0.5;
        ELSIF rtb_Sum5 >= -0.5 THEN 
            rtb_Saturation := rtb_Sum5;
        ELSE 
            rtb_Saturation := -0.5;
        END_IF;
        (* End of Saturate: '<S1>/Saturation' *)
        
        (* Switch: '<S1>/Switch1' *)
        IF bEnable THEN 
            (* Outport: '<Root>/fClosedLoopSignal' *)
            fClosedLoopSignal := rtb_Saturation;
        ELSE 
            (* Outport: '<Root>/fClosedLoopSignal' incorporates:
             *  Constant: '<S1>/Constant1' *)
            fClosedLoopSignal := 0.0;
        END_IF;
        (* End of Switch: '<S1>/Switch1' *)
        
        (* Update for DiscreteIntegrator: '<S1>/Discrete-Time Integrator1' incorporates:
         *  Product: '<S1>/Divide'
         *  Product: '<S1>/Product1'
         *  Sum: '<S1>/Sum1'
         *  Sum: '<S1>/Sum3' *)
        c_DiscreteTimeIntegrator1_D := (((((rtb_Saturation - rtb_Sum5) / fProportionalGain) + fSignalError) * fIntegralGain) * 0.01) + c_DiscreteTimeIntegrator1_D;
        IF c_DiscreteTimeIntegrator1_D > 1.0 THEN 
            c_DiscreteTimeIntegrator1_D := 1.0;
        ELSIF c_DiscreteTimeIntegrator1_D < -1.0 THEN 
            c_DiscreteTimeIntegrator1_D := -1.0;
        END_IF;
        (* End of Update for DiscreteIntegrator: '<S1>/Discrete-Time Integrator1' *)
        
        (* Update for UnitDelay: '<S2>/UD'
         *
         * Block description for '<S2>/UD':
         *  
         *  Store in Global RAM *)
        UD_DSTATE := rtb_TSamp;
        (* End of Outputs for SubSystem: '<Root>/FB_PID_new' *)
END_CASE;
END_FUNCTION_BLOCK
