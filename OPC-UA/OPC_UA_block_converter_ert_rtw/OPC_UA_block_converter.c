/*
 * Academic License - for use in teaching, academic research, and meeting
 * course requirements at degree granting institutions only.  Not for
 * government, commercial, or other organizational use.
 *
 * File: OPC_UA_block_converter.c
 *
 * Code generated for Simulink model 'OPC_UA_block_converter'.
 *
 * Model version                  : 1.9
 * Simulink Coder version         : 24.2 (R2024b) 21-Jun-2024
 * C/C++ source code generated on : Mon Mar 10 11:45:14 2025
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives: Unspecified
 * Validation result: Not run
 */

#include "OPC_UA_block_converter.h"

/* Block states (default storage) */
DW_OPC_UA_block_converter_T OPC_UA_block_converter_DW;

/* External inputs (root inport signals with default storage) */
ExtU_OPC_UA_block_converter_T OPC_UA_block_converter_U;

/* External outputs (root outports fed by signals with default storage) */
ExtY_OPC_UA_block_converter_T OPC_UA_block_converter_Y;

/* Real-time model */
static RT_MODEL_OPC_UA_block_convert_T OPC_UA_block_converter_M_;
RT_MODEL_OPC_UA_block_convert_T *const OPC_UA_block_converter_M =
  &OPC_UA_block_converter_M_;

/* Model step function */
void OPC_UA_block_converter_step(void)
{
  /* Switch: '<S1>/Switch' incorporates:
   *  Inport: '<Root>/In2'
   */
  if (OPC_UA_block_converter_U.P_enable) {
    /* Outport: '<Root>/Out1' incorporates:
     *  Inport: '<Root>/In1'
     *  Inport: '<Root>/In5'
     *  Product: '<S1>/Product'
     */
    OPC_UA_block_converter_Y.Out1 = OPC_UA_block_converter_U.Kp *
      OPC_UA_block_converter_U.error;
  } else {
    /* Outport: '<Root>/Out1' incorporates:
     *  Constant: '<S1>/Constant'
     */
    OPC_UA_block_converter_Y.Out1 = 0.0;
  }

  /* End of Switch: '<S1>/Switch' */

  /* Switch: '<S1>/Switch1' incorporates:
   *  Inport: '<Root>/In3'
   */
  if (OPC_UA_block_converter_U.I_enable) {
    /* Outport: '<Root>/Out2' incorporates:
     *  DiscreteIntegrator: '<S1>/Discrete-Time Integrator'
     */
    OPC_UA_block_converter_Y.Out2 =
      OPC_UA_block_converter_DW.DiscreteTimeIntegrator_DSTATE;
  } else {
    /* Outport: '<Root>/Out2' incorporates:
     *  Constant: '<S1>/Constant1'
     */
    OPC_UA_block_converter_Y.Out2 = 0.0;
  }

  /* End of Switch: '<S1>/Switch1' */

  /* Switch: '<S1>/Switch2' incorporates:
   *  Inport: '<Root>/In4'
   */
  if (OPC_UA_block_converter_U.D_enable) {
    /* Outport: '<Root>/Out3' incorporates:
     *  Inport: '<Root>/In1'
     *  Inport: '<Root>/In7'
     *  Product: '<S1>/Product2'
     */
    OPC_UA_block_converter_Y.Out3 = OPC_UA_block_converter_U.Kd *
      OPC_UA_block_converter_U.error;
  } else {
    /* Outport: '<Root>/Out3' incorporates:
     *  Constant: '<S1>/Constant2'
     */
    OPC_UA_block_converter_Y.Out3 = 0.0;
  }

  /* End of Switch: '<S1>/Switch2' */

  /* Update for DiscreteIntegrator: '<S1>/Discrete-Time Integrator' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In6'
   *  Product: '<S1>/Product1'
   */
  OPC_UA_block_converter_DW.DiscreteTimeIntegrator_DSTATE +=
    OPC_UA_block_converter_U.Ki * OPC_UA_block_converter_U.error * 0.01;
}

/* Model initialize function */
void OPC_UA_block_converter_initialize(void)
{
  /* (no initialization code required) */
}

/* Model terminate function */
void OPC_UA_block_converter_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
