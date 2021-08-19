<script lang="ts">

	import ProfileBox from './components/profile-box.svelte';
	import ProjectsList from './components/projects-list.svelte';

</script>

<div class="app">
	<div class="left">
		<ProfileBox />
	</div>
	<div class="right">
		<div class="section">
			<h3>About</h3>
			<p>My name is Conner. I'm a systems engineer and full-stack web developer, mostly doing work in Go, TypeScript, and C. I've been building software for over 15 years.</p>
			<p>I'm the co-founder and CTO of <a href="https://spiretechnology.com">Spire Technology</a>, where we build a video transcoding and streaming platform used by many of the biggest television shows.</p>
		</div>
		<div class="section">
			<h3>Work &amp; Projects</h3>
			<ProjectsList></ProjectsList>
		</div>
	</div>
</div>

<style lang="scss">
	.app
	{
		max-width: 1000px;
		padding: 20px;
		margin: 0 auto;

		> .left
		{
			
		}

		> .right
		{
			> .section
			{
				margin-bottom: 32px;

				h3
				{
					font-family: 'Roboto Mono';
				}

				p
				{
					color: rgba(var(--primary-font-color-rgb), 0.7);
					line-height: 140%;
					font-size: 95%;
				}
			}
		}

		@media screen and (min-width: 800px) {
			display: flex;

			> .left
			{
				flex-grow: 0;
				flex-shrink: 0;
				width: 260px;
			}

			> .right
			{
				flex-grow: 1;
				flex-shrink: 1;
				padding-left: 20px;
			}
		}
	}
</style>
