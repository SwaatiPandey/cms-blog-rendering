import Contentstack from "contentstack";
const Stack = Contentstack.Stack(process.env.API_KEY,process.env.DELIVERY_TOKEN, process.env.ENVIRONMENT_NAME)
export default Stack;