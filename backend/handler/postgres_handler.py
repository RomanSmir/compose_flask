import psycopg2
from psycopg2 import sql
from psycopg2.extras import Json, DictCursor
from psycopg2.extensions import AsIs


class MyDatabase:
    def __init__(self, host, port, user, database, password):
        self.connect = psycopg2.connect(host=host, port=port, user=user, database=database, password=password,
                                        connect_timeout=10)
        self.cur = self.connect.cursor(cursor_factory=psycopg2.extras.DictCursor)

    def select(self, query):
        self.cur.execute(query)
        query_result = [dict(line) for line in
                        [zip([column[0] for column in self.cur.description], row) for row in self.cur.fetchall()]]
        return query_result[0]

    def query(self, query):
        self.cur.execute(query)
        self.connect.commit()
        
    def insert_transactions_metadata(self, data):
        columns = data.keys()
        values = [data[column] for column in columns]
        insert_statement = 'insert into public.transactions_metadata (%s) values %s'
        self.cur.mogrify(insert_statement, (AsIs(','.join(columns)), tuple(values)))
        self.cur.execute(insert_statement, (AsIs(','.join(columns)), tuple(values)))
        self.connect.commit()
    