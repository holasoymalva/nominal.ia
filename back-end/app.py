import streamlit as st
from utils.pdf_processor import procesar_pdf, crear_indice
from utils.llm_utils import analizar_documento
from utils.text_simplifier import simplificar_lenguaje

st.title("nominal.ia - Análisis de Documentos de Seguros")

archivo_pdf = st.file_uploader("Sube un documento PDF de seguros", type="pdf")

if archivo_pdf is not None:
    textos = procesar_pdf(archivo_pdf)
    db = crear_indice(textos)
    
    clausulas, coberturas, limitantes = analizar_documento(db)
    
    st.header("Análisis del Documento")
    
    st.subheader("Cláusulas Principales")
    st.write(clausulas)
    st.write("Versión Simplificada:")
    st.write(simplificar_lenguaje(clausulas))
    
    st.subheader("Coberturas")
    st.write(coberturas)
    st.write("Versión Simplificada:")
    st.write(simplificar_lenguaje(coberturas))
    
    st.subheader("Limitantes y Exclusiones")
    st.write(limitantes)
    st.write("Versión Simplificada:")
    st.write(simplificar_lenguaje(limitantes))