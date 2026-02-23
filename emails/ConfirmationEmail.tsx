import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Link,
    Preview,
    Text,
} from "@react-email/components";
import * as React from "react";

interface ConfirmationEmailProps {
    name?: string;
}

export const ConfirmationEmail = ({ name }: ConfirmationEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>Welcome to the Briven waitlist</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Heading style={h1}>Welcome to Briven, {name || "there"}!</Heading>
                    <Text style={text}>
                        Thank you for joining the Briven Framework waitlist.
                        We are building the future of secure, extensible, self-hosted AI agents.
                    </Text>
                    <Text style={text}>
                        We will let you know as soon as we have news to share on our Managed Agents infrastructure.
                    </Text>
                    <Text style={text}>
                        In the meantime, check out our open-source release on{" "}
                        <Link href="https://github.com/flandriendev/briven" style={link}>
                            GitHub
                        </Link>{" "}
                        or visit our website at{" "}
                        <Link href="https://briven.ai" style={link}>
                            briven.ai
                        </Link>.
                    </Text>
                    <Text style={text}>Thank you!</Text>
                    <Text style={text}>— The Briven Team</Text>
                </Container>
            </Body>
        </Html>
    );
};

const main = {
    backgroundColor: "#101116",
    color: "#f6f6f8",
    fontFamily:
        "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif",
};

const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    width: "560px",
    border: "1px solid #27272a",
    borderRadius: "8px",
    marginTop: "40px",
    backgroundColor: "#101116",
    paddingLeft: "24px",
    paddingRight: "24px",
};

const h1 = {
    fontSize: "24px",
    fontWeight: "600",
    lineHeight: "1.25",
    marginBottom: "24px",
    color: "#ee4546",
};

const text = {
    fontSize: "16px",
    lineHeight: "26px",
    color: "#a1a1aa",
    marginBottom: "16px",
};

const link = {
    color: "#ee4546",
    textDecoration: "underline",
};

export default ConfirmationEmail;
