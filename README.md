# manish-9245.github.io

import streamlit as st
import pandas as pd

# Function to group similar rows
def group_similar_rows(df):
    grouped_data = {}
    for col in df.columns:
        grouped_data[col] = df.groupby(col).size().reset_index(name='count')
    return grouped_data

# Streamlit app
def main():
    st.title("CSV Column Remover and Grouper")

    # File uploader
    uploaded_file = st.file_uploader("Upload your CSV file", type=["csv"])
    
    if uploaded_file is not None:
        # Read CSV file
        df = pd.read_csv(uploaded_file)
        
        # Remove first 6 columns
        df = df.iloc[:, 6:]
        
        # Display remaining columns
        st.write("Remaining Columns:")
        st.write(df)

        # Group similar rows
        grouped_data = group_similar_rows(df)
        
        # Display grouped data
        for col, group_df in grouped_data.items():
            st.write(f"Grouped Data for Column: {col}")
            st.write(group_df)

if __name__ == "__main__":
    main()