FROM python:3.10

WORKDIR /app

RUN pip install poetry==1.8.2
COPY poetry.lock pyproject.toml /
RUN poetry config virtualenvs.create false
RUN poetry install --no-root

COPY . /app

CMD ["poetry", "run", "fastapi","dev", "src/main.py","--host", "0.0.0.0", "--port", "5000"]