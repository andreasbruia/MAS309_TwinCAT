(*
 *
 * File: OPC_UA_block_converter.st
 *
 * IEC 61131-3 Structured Text (ST) code generated for subsystem "OPC_UA_block_converter/FeedForward"
 *
 * Model name                      : OPC_UA_block_converter
 * Model version                   : 1.13
 * Model creator                   : student
 * Model last modified by          : student
 * Model last modified on          : Tue Mar 25 11:11:20 2025
 * Model sample time               : 0.01s
 * Subsystem name                  : OPC_UA_block_converter/FeedForward
 * Subsystem sample time           : 0.01s
 * Simulink PLC Coder version      : 24.2 (R2024b) 21-Jun-2024
 * ST code generated on            : Tue Mar 25 11:19:31 2025
 *
 * Target IDE selection            : PLCopen XML
 * Test Bench included             : No
 *
 *)
FUNCTION_BLOCK FeedForward
VAR_INPUT
    ssMethodType: SINT;
    ThetaRef: LREAL;
    PID: LREAL;
END_VAR
VAR_OUTPUT
    ValveOut: LREAL;
END_VAR
VAR
    UD_DSTATE: LREAL;
END_VAR
VAR_TEMP
    rtb_TSamp: LREAL;
    rtb_Diff: LREAL;
END_VAR
CASE ssMethodType OF
    0: 
        (* SystemInitialize for Atomic SubSystem: '<Root>/FeedForward' *)
        (* InitializeConditions for UnitDelay: '<S2>/UD'
         *
         * Block description for '<S2>/UD':
         *  
         *  Store in Global RAM *)
        UD_DSTATE := 0.0;
        (* End of SystemInitialize for SubSystem: '<Root>/FeedForward' *)
    1: 
        (* Outputs for Atomic SubSystem: '<Root>/FeedForward' *)
        (* SampleTimeMath: '<S2>/TSamp'
         *
         * About '<S2>/TSamp':
         *  y = u * K where K = 1 / ( w * Ts )
         *   *)
        rtb_TSamp := ThetaRef * 100.0;
        (* Sum: '<S2>/Diff' incorporates:
         *  UnitDelay: '<S2>/UD'
         *
         * Block description for '<S2>/Diff':
         *  
         *  Add in CPU
         *
         * Block description for '<S2>/UD':
         *  
         *  Store in Global RAM *)
        rtb_Diff := rtb_TSamp - UD_DSTATE;
        (* Update for UnitDelay: '<S2>/UD'
         *
         * Block description for '<S2>/UD':
         *  
         *  Store in Global RAM *)
        UD_DSTATE := rtb_TSamp;
        (* Outport: '<Root>/ValveOut' incorporates:
         *  Sum: '<S1>/Sum' *)
        ValveOut := rtb_Diff + PID;
        (* End of Outputs for SubSystem: '<Root>/FeedForward' *)
END_CASE;
END_FUNCTION_BLOCK
