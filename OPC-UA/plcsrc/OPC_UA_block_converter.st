(*
 *
 * File: OPC_UA_block_converter.st
 *
 * IEC 61131-3 Structured Text (ST) code generated for subsystem "OPC_UA_block_converter/FB_ResetIntegralController"
 *
 * Model name                      : OPC_UA_block_converter
 * Model version                   : 1.24
 * Model creator                   : student
 * Model last modified by          : student
 * Model last modified on          : Tue Apr 08 16:34:59 2025
 * Model sample time               : 0.01s
 * Subsystem name                  : OPC_UA_block_converter/FB_ResetIntegralController
 * Subsystem sample time           : 0.01s
 * Simulink PLC Coder version      : 24.2 (R2024b) 21-Jun-2024
 * ST code generated on            : Wed Apr 09 09:05:26 2025
 *
 * Target IDE selection            : PLCopen XML
 * Test Bench included             : No
 *
 *)
FUNCTION_BLOCK FB_ResetIntegralController
VAR_INPUT
    fVRef: LREAL;
    fErrorMax: LREAL;
    fError: LREAL;
END_VAR
VAR_OUTPUT
    bReset: BOOL;
END_VAR
VAR_TEMP
    rtb_Reset: DINT;
END_VAR
(* Outputs for Atomic SubSystem: '<Root>/FB_ResetIntegralController' *)
(* MATLAB Function: '<S1>/MATLAB Function' *)
(* MATLAB Function 'FB_ResetIntegralController/MATLAB Function': '<S2>:1' *)
(* '<S2>:1:3' if abs(vRef) > 0 || abs(error) > errorMax *)
IF ABS(fVRef) > 0.0 THEN 
    (* '<S2>:1:4' Reset = 0; *)
    rtb_Reset := 0;
ELSIF ABS(fError) > fErrorMax THEN 
    (* '<S2>:1:4' Reset = 0; *)
    rtb_Reset := 0;
ELSE 
    (* '<S2>:1:5' else *)
    (* '<S2>:1:6' Reset = 1; *)
    rtb_Reset := 1;
END_IF;
(* End of MATLAB Function: '<S1>/MATLAB Function' *)
(* Outport: '<Root>/bReset' incorporates:
 *  DataTypeConversion: '<S1>/Data Type Conversion' *)
bReset := rtb_Reset <> 0;
(* End of Outputs for SubSystem: '<Root>/FB_ResetIntegralController' *)
END_FUNCTION_BLOCK
