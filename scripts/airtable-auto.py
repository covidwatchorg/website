# copied directly from Colby's earlier work:
# https://github.com/covid19risk/legacy_website/pull/72/files

from airtable import Airtable
import json
import os

def valid_entry(entry):
    needed_values = ['type', 'author_name', 'url','outlet_name', 'title', 'date']

    for value in needed_values:
        if value not in entry:
            return False

    return True


def main():
    try:
        # these keys have been set up Github /websites repo secrets already
        airtable = Airtable(os.environ['AIRTABLE_BASE_KEY'], 'news', api_key=os.environ['AIRTABLE_API_KEY']) 
    except KeyError:
        print("Couldn't find airtable base key or api key")
        exit(1)

    with open('../assets/medialist.json', 'r') as f:
        media_list = json.load(f)

    for page in airtable.get_iter(view='dont_change_this_name'):
        for record in page:
            # if 'site' not in record.keys():  ----> line commented out from Colby's original code
            new_values = record['fields']

            if not valid_entry(new_values):
                    break

            if new_values not in media_list:
                media_list.append(new_values)

    with open('../assets/medialist.json', 'w') as f:
        json.dump(media_list, f)

if __name__ == '__main__':
    main()