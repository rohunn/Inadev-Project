import pandas as pd
from sqlalchemy import create_engine
from .config import Config

def fetch_data(query):
    engine = create_engine(Config.SQLALCHEMY_DATABASE_URI)
    with engine.connect() as connection:
        df = pd.read_sql(query, connection)
    return df
