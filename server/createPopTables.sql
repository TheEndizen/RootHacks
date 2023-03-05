CREATE TABLE Test (
    id char(50) PRIMARY KEY
);

CREATE TABLE ChatGPTAnswers (
    id int PRIMARY KEY,
    ans char(4000)
);

CREATE TABLE Cards (
    id int PRIMARY KEY,
    ques char(1000),
    ans char(1000)
)

INSERT INTO test (id)
    VALUES ('someone 1');
INSERT INTO test (id)
    VALUES ('someone 2');
INSERT INTO test (id)
    VALUES ('someone 3');