# copied directly from Colby's earlier work:
# https://github.com/covid19risk/legacy_website/pull/72/files

from airtable import Airtable
import json
import os

def valid_entry(entry):
    needed_values = ['type', 'author_name', 'outlet_name', 'title', 'date']

    for value in needed_values:
        if value not in entry:
            return False

    return True


def main():
    try:
        # these keys have been set up Github /websites repo secrets already
        # airtable = Airtable(os.environ['AIRTABLE_BASE_KEY'], 'Table 1', api_key=os.environ['AIRTABLE_API_KEY']) 
        
        # hardcoding base key and api key for now:
    except KeyError:
        print("Couldn't find airtable base key or api key")
        exit(1)

    with open('assets/medialist.json', 'r') as f:
        media_list = json.load(f)

    for page in airtable.get_iter(view='Grid view',sort='site'):
        for record in page:
            if 'site' not in record.keys():
                new_values = record['fields']

                if not valid_entry(new_values):
                     break

                if new_values not in media_list:
                    media_list.append(new_values)

    with open('assets/medialist.json', 'w') as f:
        json.dump(media_list, f)

if __name__ == '__main__':
    main()