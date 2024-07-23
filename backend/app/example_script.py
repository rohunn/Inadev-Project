# example_script.py
import sys, os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../..')))

 
from backend.utils import fetch_data

query = "SELECT * FROM employees"
df = fetch_data(query)
print(df)
print("test")
