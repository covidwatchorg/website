#! /usr/bin/env python3

from airtable import Airtable
import json
import os

# Write all values in the airtable table specified by
# airtable_base_key, view_name, and table_name
# to the file at `path`
# needed_fields specifies the column names that each row
# of the table must have an entry in

def update_data_file(airtable_base_key, view_name, table_name, needed_fields, path):
    try:
        airtable = Airtable(
            airtable_base_key,
            table_name,
            api_key=os.environ["AIRTABLE_API_KEY"],
        )
    except KeyError:
        print("Couldn't find airtable api key environment variable")
        exit(1)

    value_list = []

    for page in airtable.get_iter(view=view_name):
        for record in page:
            new_values = record["fields"]

            if valid_entry(new_values, needed_fields):
                value_list.append(new_values)

    with open(path, "w") as f:
        json.dump(value_list, f, indent=2, sort_keys=True)
        

def valid_entry(entry, needed_fields):
    for value in needed_fields:
        if value not in entry:
            return False

    return True

def main():
    try:
       tables = [
           {
               "airtable_base_key": os.environ["AIRTABLE_NEWS_BASE_KEY"],
               "view_name": "^^dont_change_news_name",
               "table_name": "news",
               "needed_fields": ["type", "url", "outlet_name", "title", "date"],
               "path": "../assets/data/medialist.json"
           },
           {
               "airtable_base_key": os.environ["AIRTABLE_TEAM_BASE_KEY"],
               "view_name": "^^dont_change_team_name",
               "table_name": "team",
               "needed_fields": ["name", "team"],
               "path": "../assets/data/teamlist.json"
           }
       ]

       for table in tables:
           update_data_file(**table)

    except KeyError:
        print("Couldn't find a needed airtable base key")
        exit(1)


if __name__ == "__main__":
    main()
