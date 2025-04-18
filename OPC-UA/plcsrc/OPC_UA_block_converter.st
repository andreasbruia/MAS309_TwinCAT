(*
 *
 * File: OPC_UA_block_converter.st
 *
 * IEC 61131-3 Structured Text (ST) code generated for subsystem "OPC_UA_block_converter/FB_Derivator"
 *
 * Model name                      : OPC_UA_block_converter
 * Model version                   : 1.29
 * Model creator                   : student
 * Model last modified by          : student
 * Model last modified on          : Mon Apr 14 13:33:05 2025
 * Model sample time               : 0.01s
 * Subsystem name                  : OPC_UA_block_converter/FB_Derivator
 * Subsystem sample time           : 0.01s
 * Simulink PLC Coder version      : 24.2 (R2024b) 21-Jun-2024
 * ST code generated on            : Mon Apr 14 13:33:59 2025
 *
 * Target IDE selection            : PLCopen XML
 * Test Bench included             : No
 *
 *)
FUNCTION_BLOCK FB_Derivator
VAR_INPUT
    ssMethodType: SINT;
    Input: LREAL;
END_VAR
VAR_OUTPUT
    Derivated_output: LREAL;
END_VAR
VAR
    UD_DSTATE: LREAL;
END_VAR
VAR_TEMP
    rtb_TSamp: LREAL;
END_VAR
CASE ssMethodType OF
    0: 
        (* SystemInitialize for Atomic SubSystem: '<Root>/FB_Derivator' *)
        (* InitializeConditions for UnitDelay: '<S2>/UD'
         *
         * Block description for '<S2>/UD':
         *  
         *  Store in Global RAM *)
        UD_DSTATE := 0.0;
        (* End of SystemInitialize for SubSystem: '<Root>/FB_Derivator' *)
    1: 
        (* Outputs for Atomic SubSystem: '<Root>/FB_Derivator' *)
        (* SampleTimeMath: '<S2>/TSamp'
         *
         * About '<S2>/TSamp':
         *  y = u * K where K = 1 / ( w * Ts )
         *   *)
        rtb_TSamp := Input * 100.0;
        (* Outport: '<Root>/Derivated_output' incorporates:
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
        Derivated_output := rtb_TSamp - UD_DSTATE;
        (* Update for UnitDelay: '<S2>/UD'
         *
         * Block description for '<S2>/UD':
         *  
         *  Store in Global RAM *)
        UD_DSTATE := rtb_TSamp;
        (* End of Outputs for SubSystem: '<Root>/FB_Derivator' *)
END_CASE;
END_FUNCTION_BLOCK
