import BoardOfDirectorsHero from '@/components/directors/DirectorsHero'
import GovernancePolicy from '@/components/directors/GovernancePolicy'
import LeadersProfile from '@/components/directors/LeadersProfile'
import OrganizationStructure from '@/components/directors/OrganizationStructure'

export default function Page() {
  return (
    <div>
        <BoardOfDirectorsHero/>
      <OrganizationStructure/>
      <LeadersProfile/>
      <GovernancePolicy/>
    </div>
  )
}
