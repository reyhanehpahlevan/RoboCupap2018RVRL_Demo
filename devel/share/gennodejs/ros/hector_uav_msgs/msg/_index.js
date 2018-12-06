
"use strict";

let RC = require('./RC.js');
let VelocityZCommand = require('./VelocityZCommand.js');
let AttitudeCommand = require('./AttitudeCommand.js');
let Compass = require('./Compass.js');
let ControllerState = require('./ControllerState.js');
let YawrateCommand = require('./YawrateCommand.js');
let RuddersCommand = require('./RuddersCommand.js');
let MotorPWM = require('./MotorPWM.js');
let RawMagnetic = require('./RawMagnetic.js');
let HeightCommand = require('./HeightCommand.js');
let RawRC = require('./RawRC.js');
let Supply = require('./Supply.js');
let Altimeter = require('./Altimeter.js');
let ServoCommand = require('./ServoCommand.js');
let RawImu = require('./RawImu.js');
let ThrustCommand = require('./ThrustCommand.js');
let HeadingCommand = require('./HeadingCommand.js');
let MotorStatus = require('./MotorStatus.js');
let MotorCommand = require('./MotorCommand.js');
let PositionXYCommand = require('./PositionXYCommand.js');
let VelocityXYCommand = require('./VelocityXYCommand.js');
let LandingActionGoal = require('./LandingActionGoal.js');
let TakeoffActionResult = require('./TakeoffActionResult.js');
let PoseActionResult = require('./PoseActionResult.js');
let LandingResult = require('./LandingResult.js');
let PoseFeedback = require('./PoseFeedback.js');
let PoseAction = require('./PoseAction.js');
let PoseResult = require('./PoseResult.js');
let TakeoffAction = require('./TakeoffAction.js');
let LandingActionFeedback = require('./LandingActionFeedback.js');
let TakeoffGoal = require('./TakeoffGoal.js');
let LandingGoal = require('./LandingGoal.js');
let LandingAction = require('./LandingAction.js');
let TakeoffActionFeedback = require('./TakeoffActionFeedback.js');
let TakeoffActionGoal = require('./TakeoffActionGoal.js');
let LandingFeedback = require('./LandingFeedback.js');
let LandingActionResult = require('./LandingActionResult.js');
let TakeoffFeedback = require('./TakeoffFeedback.js');
let PoseActionGoal = require('./PoseActionGoal.js');
let PoseGoal = require('./PoseGoal.js');
let PoseActionFeedback = require('./PoseActionFeedback.js');
let TakeoffResult = require('./TakeoffResult.js');

module.exports = {
  RC: RC,
  VelocityZCommand: VelocityZCommand,
  AttitudeCommand: AttitudeCommand,
  Compass: Compass,
  ControllerState: ControllerState,
  YawrateCommand: YawrateCommand,
  RuddersCommand: RuddersCommand,
  MotorPWM: MotorPWM,
  RawMagnetic: RawMagnetic,
  HeightCommand: HeightCommand,
  RawRC: RawRC,
  Supply: Supply,
  Altimeter: Altimeter,
  ServoCommand: ServoCommand,
  RawImu: RawImu,
  ThrustCommand: ThrustCommand,
  HeadingCommand: HeadingCommand,
  MotorStatus: MotorStatus,
  MotorCommand: MotorCommand,
  PositionXYCommand: PositionXYCommand,
  VelocityXYCommand: VelocityXYCommand,
  LandingActionGoal: LandingActionGoal,
  TakeoffActionResult: TakeoffActionResult,
  PoseActionResult: PoseActionResult,
  LandingResult: LandingResult,
  PoseFeedback: PoseFeedback,
  PoseAction: PoseAction,
  PoseResult: PoseResult,
  TakeoffAction: TakeoffAction,
  LandingActionFeedback: LandingActionFeedback,
  TakeoffGoal: TakeoffGoal,
  LandingGoal: LandingGoal,
  LandingAction: LandingAction,
  TakeoffActionFeedback: TakeoffActionFeedback,
  TakeoffActionGoal: TakeoffActionGoal,
  LandingFeedback: LandingFeedback,
  LandingActionResult: LandingActionResult,
  TakeoffFeedback: TakeoffFeedback,
  PoseActionGoal: PoseActionGoal,
  PoseGoal: PoseGoal,
  PoseActionFeedback: PoseActionFeedback,
  TakeoffResult: TakeoffResult,
};
