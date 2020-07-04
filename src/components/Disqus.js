import { DiscussionEmbed } from "disqus-react";
import React from "react";

const Disqus = ({ identifier, title }) =>
  <DiscussionEmbed shortname={'umazuasti'} config={{ identifier, title }} />

export default Disqus;
