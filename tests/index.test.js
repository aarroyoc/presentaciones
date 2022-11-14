const test = require("ava");
const request = require("supertest");
const {setup} = require ("../main");
const db = require("../db");

function sum(a,b){
    return a+b;
}

test.before(async () => {
    await db.sync();
});

test("Test example: Sum",t => {
    t.is(sum(1,2),3);
});

test("controllers:static:main.css", async t => {
    let res = await request(setup())
        .get("/static/main.css")
        .send();
    t.is(res.status,200);
    t.true(res.header["content-type"].startsWith("text/css"));
});

test("controllers:index", async t => {
    let res = await request(setup())
        .get("/")
        .send();
    t.is(res.status,200);
    t.true(res.header["content-type"].startsWith("text/html"));
});
test("controllers:upload:auth:get", async t => {
    let res = await request(setup())
        .get("/upload")
        .send();
    t.is(res.status,401);
    t.true(res.header["www-authenticate"] !== undefined);
});
test("controllers:upload:auth:post", async t => {
    let res = await request(setup())
        .post("/upload")
        .send();
    t.is(res.status,401);
    t.true(res.header["www-authenticate"] !== undefined);
});

test("controllers:download:nonExistant", async t => {
    let res = await request(setup())
        .get("/download/42")
        .send();
    t.is(res.status,404);
});
