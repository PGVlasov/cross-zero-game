import React, { Component } from "react";

export default class Players {
  state = {
    email: {
      type: String,
      required: true,
    },
    name: String,
    password: {
      type: String,
      required: true,
    },
    avatarUrl: String,
    resetToken: String,
    resetTokenExp: Date,
  };

  render {
  return (
      <div>
          <h1>USER NAME</h1>
      </div>
  )
}
}
