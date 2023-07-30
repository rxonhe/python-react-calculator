from context_manager.context_classes import Controller
from context_manager.routes import rest_mapping, post_mapping
from service.calculator_service import CalculatorService


@Controller
@rest_mapping("/api/v1")
class CalculatorController:

    def __init__(self, calculator_service: CalculatorService):
        self.calculator_service = calculator_service

    @post_mapping("calculate")
    def calculate(self, body):
        return self.calculator_service.calculate(body)
