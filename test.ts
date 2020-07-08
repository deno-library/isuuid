import {
  assert,
  assertEquals,
} from "https://deno.land/std/testing/asserts.ts";
const { test } = Deno;
import isuuid from "./mod.ts";

const v1 = "5d86c74a-c111-11ea-a575-02fcdc4e7412";
const v2 = "9a7b330a-a736-21e5-af7f-feaf819cdc9f";
const v3 = "8af152f3-74b7-3987-866f-5246a4d05e97";
const v4 = "85ab4abe-357b-497d-a3ec-ae4d38a4eb54";
const v5 = "e3cb2670-5c2d-5340-8e56-68a054b22590";

test("is uuid", () => {
  assert(isuuid(v1));
  assert(isuuid(v2));
  assert(isuuid(v3));
  assert(isuuid(v4));
  assert(isuuid(v5));
});

test("is uuid v1", () => {
  assertEquals(isuuid(v1, 1), true);
  assertEquals(isuuid(v1, 2), false);
  assertEquals(isuuid(v1, 3), false);
  assertEquals(isuuid(v1, 4), false);
  assertEquals(isuuid(v1, 5), false);
});

test("is uuid v2", () => {
  assertEquals(isuuid(v2, 1), false);
  assertEquals(isuuid(v2, 2), true);
  assertEquals(isuuid(v2, 3), false);
  assertEquals(isuuid(v2, 4), false);
  assertEquals(isuuid(v2, 5), false);
});

test("is uuid v3", () => {
  assertEquals(isuuid(v3, 1), false);
  assertEquals(isuuid(v3, 2), false);
  assertEquals(isuuid(v3, 3), true);
  assertEquals(isuuid(v3, 4), false);
  assertEquals(isuuid(v3, 5), false);
});

test("is uuid v4", () => {
  assertEquals(isuuid(v4, 1), false);
  assertEquals(isuuid(v4, 2), false);
  assertEquals(isuuid(v4, 3), false);
  assertEquals(isuuid(v4, 4), true);
  assertEquals(isuuid(v4, 5), false);
});

test("is uuid v5", () => {
  assertEquals(isuuid(v5, 1), false);
  assertEquals(isuuid(v5, 2), false);
  assertEquals(isuuid(v5, 3), false);
  assertEquals(isuuid(v5, 4), false);
  assertEquals(isuuid(v5, 5), true);
});