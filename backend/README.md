# Getting started
1. Run `npm install`

2. Set up docker:
Run `docker run -p 7999:5432 -d -e POSTGRES_PASSWORD=postgres -e POSTGRES_USER=postgres -e POSTGRES_DB=codenames-db -v pgdata:/var/lib/postgresql/data postgres`

    - This will set up and create the database `codenames-db` on localhost:7999. It will also create a user `postgres` with the password `postgres`. Feel free to rename anything as you see fit.

3. Use the .env.example file to create your own .env file. Make sure to replace postgres:postgres with whatever you decide to change the username and password to (format is username:password).

4. Run `npx dotenv sequelize db:migrate` to create the words table in your database.

5. Run `npx dotenv sequelize db:seed:all` to seed the database.

6. Start the server with `npm run watch`

    - You should see a console.log indicating that the codenames-db is listening on port 7000.

7. Confirm Apollo Server is running by navigating to http://localhost:7000/graphql

    - You can make queries in graphql by typing:
`query {
    smallWordList{word}
}`

    - Possible queries are:
        - smallWordList, medWordList, and largeWordList

        - Queries will return 15, 20, and 25 words, respectively.