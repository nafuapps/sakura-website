import type { sevenBgColor, sevenTextColor, SkillType } from "./commonTypes"

export const getColors = (
  skill: SkillType,
): [bgColor: sevenBgColor, textColor: sevenTextColor] => {
  if (skill == "language") {
    return ["bg-red-200", "text-red-800"]
  }
  if (skill == "cognitive") {
    return ["bg-cyan-200", "text-cyan-800"]
  }
  if (skill == "creative") {
    return ["bg-orange-200", "text-orange-800"]
  }
  if (skill == "nature") {
    return ["bg-lime-200", "text-lime-800"]
  }
  if (skill == "physical") {
    return ["bg-purple-200", "text-purple-800"]
  }
  if (skill == "practical") {
    return ["bg-indigo-200", "text-indigo-800"]
  }
  //skill=='social'
  return ["bg-yellow-200", "text-yellow-800"]
}
