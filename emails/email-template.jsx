import {
    Html,
    Head,
    Font,
    Preview,
    Heading,
    Row,
    Section,
    Text,
} from "@react-email/components";

export default function ContactFormEmail({
    ownerName,
    senderName,
    senderEmail,
    mobileNumber,
    date,
    message,
}) {
    return (
        <Html lang="en" dir="ltr">
            <Head>
                <title>New Contact Form Submission</title>
                <Font
                    fontFamily="Roboto"
                    fallbackFontFamily="Verdana"
                    webFont={{
                        url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
                        format: "woff2",
                    }}
                    fontWeight={400}
                    fontStyle="normal"
                />
            </Head>
            <Preview>New contact request from {senderName}</Preview>
            <Section>
                <Row>
                    <Heading as="h2">Hello {ownerName},</Heading>
                </Row>
                <Row>
                    <Text>
                        You have received a new message via your website's contact form.
                    </Text>
                </Row>
                <Row>
                    <Text><strong>Sender Name:</strong> {senderName}</Text>
                </Row>
                <Row>
                    <Text><strong>Sender Email:</strong> {senderEmail}</Text>
                </Row>
                <Row>
                    <Text><strong>Mobile Number:</strong> {mobileNumber}</Text>
                </Row>
                <Row>
                    <Text><strong>Date:</strong> {date}</Text>
                </Row>
                <Row>
                    <Text><strong>Message:</strong></Text>
                    <Text>{message}</Text>
                </Row>
                <Row>
                    <Text>
                        Please respond to the sender as soon as possible.
                    </Text>
                </Row>
            </Section>
        </Html>
    );
}