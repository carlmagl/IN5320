import React from "react";
import { DataQuery } from "@dhis2/app-runtime";
import i18n from "@dhis2/d2-i18n";

const query = {
  me: {
    resource: "me",
  },
};

const UserInfo = () => (
  <>
    <DataQuery query={query}>
      {({ error, loading, data }) => {
        if (error) return <span>ERROR</span>;
        if (loading) return <span>...</span>;
        return <h1>{i18n.t("Hello, {{name}}", { name: data.me.name })}</h1>;
      }}
    </DataQuery>
  </>
);

export default UserInfo;
