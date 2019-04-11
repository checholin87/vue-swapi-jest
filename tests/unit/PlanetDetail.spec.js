import { shallowMount, createLocalVue } from "@vue/test-utils";
import PlanetDetail from "@/PlanetDetail";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("PlanetDetail.vue", () => {
  const url = "https://swapi.co/api/planets/2/";
  let actions;
  let store;
  let getters;

  beforeEach(() => {
    actions = {
      planet: jest.fn()
    };

    getters = {
      planet: jest.fn()
    };
    getters.planet.mockReturnValueOnce({
      name: "Alderaan",
      rotation_period: "24",
      orbital_period: "364",
      diameter: "12500",
      climate: "temperate",
      gravity: "1 standard",
      terrain: "grasslands, mountains",
      surface_water: "40",
      population: "2000000000",
      residents: [
        "https://swapi.co/api/people/5/",
        "https://swapi.co/api/people/68/",
        "https://swapi.co/api/people/81/"
      ],
      films: ["https://swapi.co/api/films/6/", "https://swapi.co/api/films/1/"],
      created: "2014-12-10T11:35:48.479000Z",
      edited: "2014-12-20T20:58:18.420000Z",
      url: "https://swapi.co/api/planets/2/"
    });

    store = new Vuex.Store({
      getters,
      actions
    });
  });

  it("must query the planet by url when created", () => {
    // prepare mocks & exec

    const wrapper = shallowMount(PlanetDetail, {
      store,
      localVue,
      propsData: { url }
    });

    // assert

    expect(actions.planet).toHaveBeenCalled();
    expect(getters.planet).toHaveBeenCalled();
  });
});
