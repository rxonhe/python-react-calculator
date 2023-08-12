from context_manager.beans.service import Service


@Service
class CalculatorService:
    @staticmethod
    def calculate(body):
        return str(eval(body)) if body else "Não entendi a expressão"
