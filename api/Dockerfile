FROM python:3.10

WORKDIR /app

RUN pip install poetry==1.8.2
COPY poetry.lock pyproject.toml /
RUN poetry config virtualenvs.create false
RUN poetry install

COPY ./src /app

ARG flask_env
ENV FLASK_ENV $flask_env

CMD python app.py