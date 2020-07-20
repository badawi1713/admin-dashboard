import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import ISP from "./ISP";

it("renders without crashing", () => {
  const wrapper = mount(
    <MemoryRouter>
      <ISP
        match={{
          params: { id: "1" },
          isExact: true,
          path: "/isp/:id",
          name: "ISP details",
        }}
      />
    </MemoryRouter>
  );
  expect(wrapper.containsMatchingElement(<strong>Samppa Nori</strong>)).toEqual(
    true
  );
  wrapper.unmount();
});
