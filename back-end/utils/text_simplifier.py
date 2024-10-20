from utils.llm_utils import llm

def simplificar_lenguaje(texto):
    prompt = f"Simplifica el siguiente texto de seguros para que sea entendible por una persona común: {texto}"
    return llm(prompt)
