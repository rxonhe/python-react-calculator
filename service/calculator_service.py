from context_manager.context_classes import Service


@Service
class CalculatorService:
    @staticmethod
    def calculate(body):
        return str(eval(body)) if body else "Não entendi a expressão"
