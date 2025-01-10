from django.db import models

class Candidate(models.Model):
    fullname = models.CharField(max_length=100)
    nav_fullname = models.CharField(max_length=100)
    image = models.CharField(max_length=100)
    roles = models.CharField(max_length=100)
    linkedin_url = models.CharField(max_length=100)
    github_url = models.CharField(max_length=100)
    researchgate_url = models.CharField(max_length=100)
    about_me = models.TextField()
    about_me_image = models.ImageField(upload_to="uploads/")
    experience_image = models.ImageField(upload_to="uploads/")
    resume_url = models.CharField(max_length=100)

    def __str__(self):
        return self.fullname

class Experience(models.Model):
    candidate = models.ForeignKey(Candidate, on_delete=models.CASCADE, related_name='experiences')
    company = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)  # Allow current job (no end date)
    description = models.TextField()
    def __str__(self):
        return f"{self.role} at {self.company}"

class Project(models.Model):
    candidate = models.ForeignKey(Candidate, on_delete=models.CASCADE, related_name='projects')
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to="uploads/")
    repo_url = models.CharField(max_length=200)
   
    def __str__(self):
        return self.title

class Skill(models.Model):
    name = models.CharField(max_length=100)


    def __str__(self):
        return self.name


class CandidateSkill(models.Model):
    candidate = models.ForeignKey(Candidate, on_delete=models.CASCADE, related_name='candidate_skills')
    skill = models.ForeignKey(Skill, on_delete=models.CASCADE)
    image = models.ImageField(upload_to="uploads/")

    def __str__(self):
        return f"{self.candidate.fullname} - {self.skill.name}"

    