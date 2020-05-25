#! /usr/bin/env python3

from airtable import Airtable
import json
import os

VIEW_NAME = "^^dont_change_news_name"
OUTPUT_PATH = "../assets/data/medialist.json"

def valid_entry(entry):

    for value in ["type", "url", "outlet_name", "title", "date"]:
        if value not in entry:
            return False

    return True


def main():
    try:
        # these keys have been set up Github /websites repo secrets already
        airtable = Airtable(
            os.environ["AIRTABLE_NEWS_BASE_KEY"],
            "news",
            api_key=os.environ["AIRTABLE_API_KEY"],
        )
    except KeyError:
        print("Couldn't find airtable base key or api key")
        exit(1)

    media_list = []

    for page in airtable.get_iter(view=VIEW_NAME):
        for record in page:
            new_values = record["fields"]

            if valid_entry(new_values):
                media_list.append(new_values)

    with open(OUTPUT_PATH, "w") as f:
        json.dump(media_list, f, indent=2, sort_keys=True)


if __name__ == "__main__":
    main()
