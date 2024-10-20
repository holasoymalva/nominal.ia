from langchain.llms import LlamaCpp
from langchain.chains import RetrievalQA
import os

# Cargar el modelo LLaMA 3
model_path = os.getenv('LLAMA_MODEL_PATH', 'models/llama-3-model/model.bin')
llm = LlamaCpp(model_path=model_path)

def analizar_documento(db):
    qa = RetrievalQA.from_chain_type(llm=llm, chain_type="stuff", retriever=db.as_retriever())
    
    clausulas = qa.run("¿Cuáles son las cláusulas principales de este seguro?")
    coberturas = qa.run("¿Cuáles son las coberturas que ofrece este seguro?")
    limitantes = qa.run("¿Cuáles son las principales limitantes o exclusiones de este seguro?")
    
    return clausulas, coberturas, limitantes