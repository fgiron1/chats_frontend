from Motor import MotorClient

client = motor.motor_tornado.MotorClient()
client = motor.motor_tornado.MotorClient('localhost', 27017)