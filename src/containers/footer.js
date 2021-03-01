import React from 'react'
import Footer from '../components/footer'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Title>Questions? Contact Us.</Footer.Title>
            <Footer.Break/>
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href='#'>Audio and Subtitles</Footer.Link>
                    <Footer.Link href='#'>Media Center</Footer.Link>
                    <Footer.Link href='#'>Privacy</Footer.Link>
                    <Footer.Link href='#'>Contact Us</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href='#'>Audio Description</Footer.Link>
                    <Footer.Link href='#'>Investor Relations</Footer.Link>
                    <Footer.Link href='#'>Legal Notices</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href='#'>Help Center</Footer.Link>
                    <Footer.Link href='#'>Jobs</Footer.Link>
                    <Footer.Link href='#'>Cookie Preferences</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href='#'>Gift Cards</Footer.Link>
                    <Footer.Link href='#'>Terms of Use</Footer.Link>
                    <Footer.Link href='#'>Corporate Information</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Break/>
            <Footer.Text>1997-2021 Netflix, Inc.</Footer.Text>
        </Footer>
    )
}
