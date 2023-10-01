registerSettingsPage((props) => (
  <Page>
    <Section
      title={
        <Text bold align="center">App Settings</Text>
      }
    >
    </Section>   
    <Section>
      <Text bold>User Account</Text>
      <TextInput label="Your name" settingsKey="senderName" />
      <TextInput label="Twilio virtual phone number" settingsKey="senderNumber"/>
    </Section>   
    <Section>
      <Text bold>Emergency Contact</Text>
      <TextInput label="Name" settingsKey="emergencyContactName" />
      <TextInput label="Verified phone number" settingsKey="emergencyContactNumber" />
    </Section>
  </Page>
));
