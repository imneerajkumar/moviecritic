import React from "react";
import { Flex, Spin } from "antd";

const Loader = () => (
  <Flex
    align="center"
    gap="middle"
    className="flex justify-between items-center"
  >
    <Spin size="large" />
  </Flex>
);

export default Loader;
