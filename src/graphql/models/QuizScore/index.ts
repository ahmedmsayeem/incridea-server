import { builder } from "~/graphql/builder";
import "~/graphql/models/QuizScore/mutation";
import "~/graphql/models/QuizScore/query";

builder.prismaObject("QuizScore", {
  fields: (t) => ({
    id: t.exposeID("id"),
    teamId: t.exposeInt("teamId"),
    quizId: t.exposeString("quizId"),
    score: t.exposeInt("score"),
    timeTaken: t.exposeFloat("timeTaken"),
    team: t.relation("Team"),
    quiz: t.relation("Quiz"),
    flags: t.exposeInt("flags"),
    allowUser: t.exposeBoolean("allowUser"),
  }),
});
