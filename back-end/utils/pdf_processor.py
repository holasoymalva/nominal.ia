from langchain.document_loaders import PyPDFLoader
from langchain.text_splitter import CharacterTextSplitter
from langchain.embeddings import HuggingFaceEmbeddings
from langchain.vectorstores import FAISS

def procesar_pdf(archivo):
    loader = PyPDFLoader(archivo)
    documentos = loader.load()
    text_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=0)
    textos = text_splitter.split_documents(documentos)
    return textos

def crear_indice(textos):
    embeddings = HuggingFaceEmbeddings()
    db = FAISS.from_documents(textos, embeddings)
    return db