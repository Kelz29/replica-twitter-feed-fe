import { Center, Flex, Text, Square, Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import _ from "lodash";
import { StyledContainer } from "./styles";
import axios from "axios";
import { API_URL_DEPLOYED } from "../../constants";
import { mockTweets } from "../../mock-data";

const HomePage = () => {
 
  const [apiTweets, setApiTweets] = useState([]);
  useEffect(() => {
    const getTweets = async () => {
      const res = await axios.get(`${API_URL_DEPLOYED}`);
      setApiTweets(res.data);
    };
    getTweets();
  }, []);
  let grouped = _.groupBy(apiTweets || mockTweets, function(tweet: any) {
    return tweet.username;
  });

  return (
    <StyledContainer>
      {apiTweets?.map((tweet: any, index) => {
        if (grouped[`${tweet?.username}`]) {
          return (
            <>
              <Flex color="white" m={"7"} borderRadius="full">
                <Center w="100px" bg="green.500">
                  <Text m="2">{tweet?.username}</Text>
                </Center>
                <Square bg="blue.500" size="150px">
                  <Text m="2">Followers</Text>
                </Square>
                <Box flex="1" bg="tomato">
                  <Text m="2">{tweet.follower.user}</Text>
                  <Text m="2">{tweet.follower.tweet}</Text>
                </Box>
              </Flex>
            </>
          );
        } else return <></>;
      })}
    </StyledContainer>
  );
};

export default HomePage;
