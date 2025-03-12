/*
 * Academic License - for use in teaching, academic research, and meeting
 * course requirements at degree granting institutions only.  Not for
 * government, commercial, or other organizational use.
 *
 * File: OPC_UA_block_converter.h
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

#ifndef OPC_UA_block_converter_h_
#define OPC_UA_block_converter_h_
#ifndef OPC_UA_block_converter_COMMON_INCLUDES_
#define OPC_UA_block_converter_COMMON_INCLUDES_
#include "rtwtypes.h"
#include "rtw_continuous.h"
#include "rtw_solver.h"
#endif                             /* OPC_UA_block_converter_COMMON_INCLUDES_ */

#include "OPC_UA_block_converter_types.h"

/* Macros for accessing real-time model data structure */
#ifndef rtmGetErrorStatus
#define rtmGetErrorStatus(rtm)         ((rtm)->errorStatus)
#endif

#ifndef rtmSetErrorStatus
#define rtmSetErrorStatus(rtm, val)    ((rtm)->errorStatus = (val))
#endif

/* Block states (default storage) for system '<Root>' */
typedef struct {
  real_T DiscreteTimeIntegrator_DSTATE;/* '<S1>/Discrete-Time Integrator' */
} DW_OPC_UA_block_converter_T;

/* External inputs (root inport signals with default storage) */
typedef struct {
  real_T error;                        /* '<Root>/In1' */
  boolean_T P_enable;                  /* '<Root>/In2' */
  boolean_T I_enable;                  /* '<Root>/In3' */
  boolean_T D_enable;                  /* '<Root>/In4' */
  real_T Kp;                           /* '<Root>/In5' */
  real_T Ki;                           /* '<Root>/In6' */
  real_T Kd;                           /* '<Root>/In7' */
} ExtU_OPC_UA_block_converter_T;

/* External outputs (root outports fed by signals with default storage) */
typedef struct {
  real_T Out1;                         /* '<Root>/Out1' */
  real_T Out2;                         /* '<Root>/Out2' */
  real_T Out3;                         /* '<Root>/Out3' */
} ExtY_OPC_UA_block_converter_T;

/* Real-time Model Data Structure */
struct tag_RTM_OPC_UA_block_converte_T {
  const char_T * volatile errorStatus;
};

/* Block states (default storage) */
extern DW_OPC_UA_block_converter_T OPC_UA_block_converter_DW;

/* External inputs (root inport signals with default storage) */
extern ExtU_OPC_UA_block_converter_T OPC_UA_block_converter_U;

/* External outputs (root outports fed by signals with default storage) */
extern ExtY_OPC_UA_block_converter_T OPC_UA_block_converter_Y;

/* Model entry point functions */
extern void OPC_UA_block_converter_initialize(void);
extern void OPC_UA_block_converter_step(void);
extern void OPC_UA_block_converter_terminate(void);

/* Real-time Model object */
extern RT_MODEL_OPC_UA_block_convert_T *const OPC_UA_block_converter_M;

/*-
 * These blocks were eliminated from the model due to optimizations:
 *
 * Block '<S1>/Gain' : Eliminated nontunable gain of 1
 */

/*-
 * The generated code includes comments that allow you to trace directly
 * back to the appropriate location in the model.  The basic format
 * is <system>/block_name, where system is the system number (uniquely
 * assigned by Simulink) and block_name is the name of the block.
 *
 * Use the MATLAB hilite_system command to trace the generated code back
 * to the model.  For example,
 *
 * hilite_system('<S3>')    - opens system 3
 * hilite_system('<S3>/Kp') - opens and selects block Kp which resides in S3
 *
 * Here is the system hierarchy for this model
 *
 * '<Root>' : 'OPC_UA_block_converter'
 * '<S1>'   : 'OPC_UA_block_converter/Subsystem'
 */
#endif                                 /* OPC_UA_block_converter_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
