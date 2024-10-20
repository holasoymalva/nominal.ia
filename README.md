# nominal.ia

## Descripción del Proyecto

nominal.ia es una aplicación web que utiliza inteligencia artificial para analizar documentos PDF de seguros. La aplicación extrae y simplifica información clave como cláusulas principales, coberturas y limitantes, haciéndola más accesible para personas sin experiencia en el campo de los seguros.

## Características Principales

- Carga y análisis de documentos PDF de seguros
- Extracción de cláusulas principales, coberturas y limitantes
- Simplificación del lenguaje técnico de seguros
- Interfaz de usuario intuitiva desarrollada con Streamlit

## Estructura del Proyecto

```
nominal-ia/
│
├── app.py                 # Aplicación principal de Streamlit
├── requirements.txt       # Dependencias del proyecto
├── README.md              # Este archivo
│
├── models/
│   └── llama-3-model/     # Carpeta para el modelo LLaMA 3 (no incluido en el repositorio)
│
├── utils/
│   ├── pdf_processor.py   # Funciones para procesar PDFs
│   ├── llm_utils.py       # Utilidades para interactuar con LLaMA 3
│   └── text_simplifier.py # Funciones para simplificar texto
│
└── tests/
    ├── test_pdf_processor.py
    ├── test_llm_utils.py
    └── test_text_simplifier.py
```

## Configuración del Entorno de Desarrollo

1. Clonar el repositorio:
   ```
   git clone https://github.com/tu-usuario/nominal-ia.git
   cd nominal-ia
   ```

2. Crear un entorno virtual:
   ```
   python -m venv venv
   source venv/bin/activate  # En Windows: venv\Scripts\activate
   ```

3. Instalar las dependencias:
   ```
   pip install -r requirements.txt
   ```

4. Descargar el modelo LLaMA 3:
   - Obtén el modelo LLaMA 3 de la fuente oficial (no incluido en este repositorio por razones de licencia y tamaño).
   - Coloca los archivos del modelo en la carpeta `models/llama-3-model/`.

5. Configurar las variables de entorno:
   - Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:
     ```
     LLAMA_MODEL_PATH=models/llama-3-model/model.bin
     ```

## Ejecución del Proyecto

Para ejecutar la aplicación:

```
streamlit run app.py
```

La aplicación estará disponible en `http://localhost:8501`.

## Dependencias Principales

- streamlit
- langchain
- llama-cpp-python
- pypdf
- faiss-cpu
- sentence-transformers

Consulta `requirements.txt` para ver la lista completa de dependencias y sus versiones.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue para discutir cambios mayores antes de crear un pull request.

## Licencia

[MIT License](https://opensource.org/licenses/MIT)
