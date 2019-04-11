// mutations.spec.js

import { mutations } from "@/store";

// destructure assign `mutations`

const { planets } = mutations;

describe("store mutations", () => {
  it("set planets", () => {
    // mock state
    const state = { planets: [] };

    // apply mutation
    planets(state, [{}]);

    // assert result
    expect(state.planets.length).toBe(1);
  });
});
