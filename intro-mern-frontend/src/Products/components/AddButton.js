import React from 'react' 
import { Container, Section, Button } from 'react-bulma-components'

const AddButton = () => {
    return (
     <Section>
        <Container className="is-pulled-right">
        <Button color="primary">add</Button>
        </Container>
        </Section>
    )
}

export default AddButton