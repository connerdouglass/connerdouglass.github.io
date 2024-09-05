<script lang="ts">
	import { Work } from '../data/work_projects';
	import ProjectsList from '../components/projects-list.svelte';
	import { Repos } from '../data/open_source_repos';
	import ReposList from '../components/repos-list.svelte';

	const started_coding_age = 9;
	const started_coding_year = 1996 + started_coding_age;
	const building_software_years = new Date().getFullYear() - started_coding_year;
</script>

<div class="section">
	<h3>About</h3>
	<p>
		My name is Conner. I'm a senior systems engineer and entrepreneur with {building_software_years}
		years of experience building software.
	</p>
	<p>
		I am a senior software engineer at <a href="https://tanium.com" target="_blank">Tanium</a>,
		building cloud web services.
	</p>
	<p>
		I'm also the co-founder and CTO of <a href="https://spiretechnology.com" target="_blank"
			>Spire Technology</a
		>, where we build a video transcoding and streaming platform used by many of the biggest
		television shows.
	</p>
</div>
<div class="section">
	<h3>Work</h3>
	<ProjectsList projects={Work}></ProjectsList>
</div>
<div class="section">
	<h3>Open Source</h3>
	<ReposList repos={Repos}></ReposList>
</div>

<style lang="scss">
	.section {
		margin-bottom: 32px;

		h3 {
			font-family: 'Roboto Mono';
		}

		p {
			color: rgba(var(--primary-font-color-rgb), 0.7);
			line-height: 140%;
			font-size: 95%;
		}
	}
</style>
