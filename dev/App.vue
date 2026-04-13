<script setup>
import { ref } from 'vue';
import {
  Button, Tag, TextInput, TextArea, Select, Checkbox,
  Heading, BodyText, BackLink, Link, InsetText, VisuallyHidden,
  FormGroup, ErrorSummary, NotificationBanner,
  SummaryList, SummaryCard, Panel, Table,
  Container, MainWrapper, GridRow, GridColumn,
  Header, HeaderNavItem, Footer,
} from '../src/index.js';
import SectionHeading from './SectionHeading.vue';
import CodePanel from './CodePanel.vue';
import { codeExamples } from './code-examples.js';

const textValue = ref('');
const textAreaValue = ref('');
const selectValue = ref('');
const checkboxValue = ref(false);

const selectOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const summaryItems = [
  { key: 'Name', value: 'John Smith' },
  { key: 'Email', value: 'john@example.com' },
  { key: 'Role', value: 'Administrator' },
];

const tableHeaders = [
  { key: 'name', label: 'Name' },
  { key: 'status', label: 'Status' },
  { key: 'date', label: 'Date' },
];

const tableRows = [
  { name: 'Talk about Vue', status: 'Approved', date: '2026-04-01' },
  { name: 'Workshop on Testing', status: 'New', date: '2026-04-05' },
  { name: 'Panel Discussion', status: 'Rejected', date: '2026-03-20' },
];

// Code panel state
const panelOpen = ref(false);
const panelTitle = ref('');
const panelCode = ref('');

function showCode(title, code) {
  panelTitle.value = title;
  panelCode.value = code.trim();
  panelOpen.value = true;
}

</script>

<template>
  <Header title="BDS UI Kit" logo-src="https://www.bodgeham-on-wye-gov.uk/images/logo_white.svg">
    <HeaderNavItem active><a href="#" class="govuk-header__link">Home</a></HeaderNavItem>
    <HeaderNavItem><a href="#" class="govuk-header__link">About</a></HeaderNavItem>
    <HeaderNavItem><a href="#" class="govuk-header__link">Contact</a></HeaderNavItem>
  </Header>

  <Container>
    <MainWrapper>
      <Heading :level="1">BDS UI Kit</Heading>
      <BodyText size="l">A Vue 3 component library based on the Bodgeham Design System. Built for reuse across Bodgeham Digital Services projects.</BodyText>

      <!-- Getting Started -->
      <section class="getting-started">
        <SectionHeading title="Getting Started" @show-code="showCode('Installation', codeExamples.install)" />

        <div class="getting-started__steps">
          <div class="getting-started__step">
            <Tag color="blue">1</Tag>
            <div class="getting-started__step-content">
              <Heading :level="3">Install</Heading>
              <pre class="getting-started__code">npm install bodgeham-digital-services/BDS-UI-Kit</pre>
            </div>
          </div>

          <div class="getting-started__step">
            <Tag color="blue">2</Tag>
            <div class="getting-started__step-content">
              <Heading :level="3">Register the plugin</Heading>
              <pre class="getting-started__code">import { createBdsUiKit } from 'bds-ui-kit';
import 'bds-ui-kit/style.css';

app.use(createBdsUiKit());</pre>
            </div>
          </div>

          <div class="getting-started__step">
            <Tag color="blue">3</Tag>
            <div class="getting-started__step-content">
              <Heading :level="3">Use components</Heading>
              <pre class="getting-started__code">import { Button, Heading } from 'bds-ui-kit';</pre>
            </div>
          </div>
        </div>

        <GridRow>
          <GridColumn width="one-half">
            <SummaryCard title="Full setup example">
              <template #actions>
                <button class="getting-started__view-btn" @click="showCode('Setup (main.js)', codeExamples.setup)">View code</button>
              </template>
              <BodyText size="s">Register the plugin in your app entry point to auto-load all styles.</BodyText>
            </SummaryCard>
          </GridColumn>
          <GridColumn width="one-half">
            <SummaryCard title="Component usage">
              <template #actions>
                <button class="getting-started__view-btn" @click="showCode('Component Usage', codeExamples.usage)">View code</button>
              </template>
              <BodyText size="s">Import individual components in your SFCs. All components are tree-shakeable.</BodyText>
            </SummaryCard>
          </GridColumn>
        </GridRow>

        <InsetText>
          You can also import just the design tokens without any components:
          <code style="font-size: 14px; background: var(--govuk-colour-light-grey); padding: 2px 6px;">@import 'bds-ui-kit/tokens';</code>
          <br />
          <a href="#" class="govuk-link" @click.prevent="showCode('Tokens Only', codeExamples.tokensOnly)">View tokens-only example</a>
        </InsetText>
      </section>

      <hr style="border: none; border-top: 1px solid var(--govuk-colour-mid-grey); margin: 40px 0;" />

      <Heading :level="2" size="xl">Components</Heading>

      <!-- Header -->
      <section>
        <SectionHeading title="Header" @show-code="showCode('Header', codeExamples.header)" />
        <BodyText size="s">See the header at the top of this page.</BodyText>
      </section>

      <!-- Buttons -->
      <section>
        <SectionHeading title="Buttons" @show-code="showCode('Button', codeExamples.buttons)" />
        <Button>Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="warning">Warning Button</Button>
        <Button disabled>Disabled Button</Button>
      </section>

      <!-- Tags -->
      <section>
        <SectionHeading title="Tags" @show-code="showCode('Tag', codeExamples.tags)" />
        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 20px;">
          <Tag color="blue">Blue</Tag>
          <Tag color="green">Green</Tag>
          <Tag color="red">Red</Tag>
          <Tag color="yellow">Yellow</Tag>
          <Tag color="grey">Grey</Tag>
          <Tag color="orange">Orange</Tag>
          <Tag color="purple">Purple</Tag>
        </div>
      </section>

      <!-- Typography -->
      <section>
        <SectionHeading title="Typography" @show-code="showCode('Typography', codeExamples.typography)" />
        <Heading :level="1">Heading XL</Heading>
        <Heading :level="2">Heading L</Heading>
        <Heading :level="3">Heading M</Heading>
        <Heading :level="4">Heading S</Heading>
        <BodyText size="l">Body large text for lead paragraphs.</BodyText>
        <BodyText>Body default text for standard content.</BodyText>
        <BodyText size="s">Body small text for supplementary information.</BodyText>
      </section>

      <!-- Form Elements -->
      <section>
        <SectionHeading title="Form Elements" @show-code="showCode('Form Elements', codeExamples.forms)" />

        <FormGroup id="name" label="Full name" hint="As shown on your passport">
          <TextInput id="name" v-model="textValue" />
        </FormGroup>

        <FormGroup id="email" label="Email address">
          <TextInput id="email" v-model="textValue" type="email" />
        </FormGroup>

        <FormGroup id="description" label="Description" hint="Provide a brief description">
          <TextArea id="description" v-model="textAreaValue" :rows="5" />
        </FormGroup>

        <FormGroup id="category" label="Category">
          <Select id="category" v-model="selectValue" :options="selectOptions" />
        </FormGroup>

        <Checkbox id="agree" v-model="checkboxValue" label="I agree to the terms" hint="You must agree to continue" />

        <FormGroup id="error-example" label="Field with error" error="Enter a valid value">
          <TextInput id="error-example" v-model="textValue" :error="true" />
        </FormGroup>
      </section>

      <!-- Error Summary -->
      <section>
        <SectionHeading title="Error Summary" @show-code="showCode('ErrorSummary', codeExamples.errorSummary)" />
        <ErrorSummary :errors="['Enter your full name', 'Enter a valid email address']" />
      </section>

      <!-- Notification Banners -->
      <section>
        <SectionHeading title="Notification Banners" @show-code="showCode('NotificationBanner', codeExamples.notifications)" />
        <NotificationBanner title="Important">
          <p class="govuk-notification-banner__heading">You have 7 days left to submit your response.</p>
        </NotificationBanner>
        <NotificationBanner type="success" title="Success">
          <p class="govuk-notification-banner__heading">Your submission has been accepted.</p>
        </NotificationBanner>
      </section>

      <!-- Panel -->
      <section>
        <SectionHeading title="Panel" @show-code="showCode('Panel', codeExamples.panel)" />
        <Panel title="Application complete" variant="confirmation">
          Your reference number is HDJ2123F.
        </Panel>
      </section>

      <!-- Summary List -->
      <section>
        <SectionHeading title="Summary List" @show-code="showCode('SummaryList', codeExamples.summaryList)" />
        <SummaryList :items="summaryItems" />
      </section>

      <!-- Summary Card -->
      <section>
        <SectionHeading title="Summary Card" @show-code="showCode('SummaryCard', codeExamples.summaryCard)" />
        <SummaryCard title="Personal Details">
          <SummaryList :items="summaryItems" />
        </SummaryCard>
      </section>

      <!-- Table -->
      <section>
        <SectionHeading title="Table" @show-code="showCode('Table', codeExamples.table)" />
        <Table :headers="tableHeaders" :rows="tableRows" caption="CFP Submissions" />
      </section>

      <!-- Grid -->
      <section>
        <SectionHeading title="Grid Layout" @show-code="showCode('Grid Layout', codeExamples.grid)" />
        <GridRow>
          <GridColumn width="one-third">
            <div style="background: var(--govuk-colour-light-grey); padding: 15px;">One third</div>
          </GridColumn>
          <GridColumn width="two-thirds">
            <div style="background: var(--govuk-colour-light-grey); padding: 15px;">Two thirds</div>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn width="one-half">
            <div style="background: var(--govuk-colour-light-grey); padding: 15px;">One half</div>
          </GridColumn>
          <GridColumn width="one-half">
            <div style="background: var(--govuk-colour-light-grey); padding: 15px;">One half</div>
          </GridColumn>
        </GridRow>
      </section>

      <!-- Inset Text -->
      <section>
        <SectionHeading title="Inset Text" @show-code="showCode('InsetText', codeExamples.insetText)" />
        <InsetText>
          It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.
        </InsetText>
      </section>

      <!-- Links -->
      <section>
        <SectionHeading title="Links" @show-code="showCode('Links', codeExamples.links)" />
        <BackLink href="#">Back</BackLink>
        <BodyText>
          Visit the <Link href="#">example page</Link> for more information.
        </BodyText>
      </section>

      <!-- Footer -->
      <section>
        <SectionHeading title="Footer" @show-code="showCode('Footer', codeExamples.footer)" />
        <BodyText size="s">See the footer at the bottom of this page.</BodyText>
      </section>

    </MainWrapper>
  </Container>

  <Footer
    copyright="© 2026 BDS UI Kit | Open Government Licence v3.0"
    logo-src="https://www.bodgeham-on-wye-gov.uk/images/logo.svg"
  >
    <p style="font-size: 16px; margin-bottom: 15px;">
      <strong>BDS UI Kit</strong><br />
      Component preview for development
    </p>
  </Footer>

  <!-- Code Panel -->
  <CodePanel :open="panelOpen" :title="panelTitle" :code="panelCode" @close="panelOpen = false" />
</template>

<style scoped>
.getting-started__steps {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
}

.getting-started__step {
  background: var(--govuk-colour-light-grey);
  padding: 20px;
  border-left: 4px solid var(--govuk-colour-blue);
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.getting-started__step :deep(.govuk-heading-m) {
  margin: 0 0 10px;
}

.getting-started__step-content {
  flex: 1;
  min-width: 0;
}

.getting-started__code {
  background: #1e1e2e;
  color: #cdd6f4;
  padding: 12px 16px;
  font-family: "JetBrains Mono", "Fira Code", "Cascadia Code", Consolas, monospace;
  font-size: 13px;
  line-height: 1.5;
  overflow-x: auto;
  margin: 0;
  border-radius: 4px;
}

.getting-started__view-btn {
  background: none;
  border: none;
  color: var(--govuk-colour-blue);
  text-decoration: underline;
  cursor: pointer;
  font-size: 14px;
  padding: 0;
}

.getting-started__view-btn:hover {
  color: var(--govuk-colour-dark-blue);
}

</style>
