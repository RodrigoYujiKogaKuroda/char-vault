# Char Vault

Simple API to manage your character from Dungeons & Dragons 5th Edition.

<br/>

## Database Structure:
There is only one table. Command to generate it is written below:

```bash
[PostgreSQL]
CREATE TABLE "characters" (
	"id" SERIAL PRIMARY KEY,
	"name" TEXT UNIQUE NOT NULL,
	"race" TEXT NOT NULL,
	"class" TEXT NOT NULL,
	"level" INTEGER NOT NULL
);
```

<br/>

## Routes:

### GET:
```bash
GET -> DATABASE_URL/characters
```
Show all the characters on the list.

<br/>

### POST:
```bash
POST -> DATABASE_URL/characters

body:
{
    name: string,
    race: string,
    class: string,
    level: number
}
```
Create the character on the database (_**body**_ required).

<br/>

### PUT:
```bash
PUT -> DATABASE_URL/characters/:id
```
Increase the character level in 1 (up to 20) [_**id**_ required].

<br/>

### DELETE:
```bash
DELETE -> DATABASE_URL/characters/:id
```
Delete the character from the database (_**id**_ required).